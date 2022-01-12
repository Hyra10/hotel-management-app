import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import { useGetAllReportsByStudentIdLazyQuery,
  GetAllReportsByStudentIdQuery,
  useGetAllUsersDdQuery } from '../../generated/graphql'
import LoadingComponent from '../../components/Loading/loading.component';
import useStyles from './report.style';
import SectionHeaderComponent from '../../components/SectionHeader/sectionHeader.component';
// import { UseAuth } from '../Context/AuthContext/useAuthContext';
import { ReportPayload, Reports } from './report.types';
import { format, parseISO } from 'date-fns';

const mapReports = (data : GetAllReportsByStudentIdQuery) => (
  data.GetAllReportsByStudentId.map((x) => ({
    reportId: +x.reportId,
    createdAt: format(parseISO(x.createdAt), 'dd/MM/yyyy'),
    message: x.message,
    userId: +x.user.userId,
    userName: x.user.userName,
  } as ReportPayload))
)

const ProfesorLogComponent: FC = () => {
  // const { userData } = UseAuth();
  const [getAllReportsFn, { data, loading }] = useGetAllReportsByStudentIdLazyQuery();
  const { data: allUsers } = useGetAllUsersDdQuery();
  const classes = useStyles();
  const [reports, setReports] = useState([] as Reports)

  useEffect(() => {
    if((allUsers?.getAllUsers?.length || 0) > 0) {
      const studentId = +(allUsers?.getAllUsers[0].id || 0);
      getAllReportsFn({ variables: { studentId } });
    }
  }, [getAllReportsFn, allUsers])

  useEffect(() => {
    if(data) {
      const mapped = mapReports(data);
      setReports(mapped)
    }
  }, [data])

  const onUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    getAllReportsFn({variables: { studentId: +e.target.value }});
  }

  if (loading || !data) {
    return <LoadingComponent />
  }

  return (
    <>
      <SectionHeaderComponent name="Acciones de Estudiantes"/>
      <div className={classes.inlineInputs}>
        <label>Estudiantes</label>
        <select className={classes.input} onChange={onUserChange}>
          {allUsers?.getAllUsers?.map(x => 
            <option key={x.id} value={x.id}>{x.userName}</option>
          )}
        </select>
      </div>


      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Acciones del Estudiante</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(x =>
              <tr key={x.reportId}>
                <td>{x.userName}</td>
                <td>{x.message}</td>
                <td>{x.createdAt}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  </>
  );
};

export default ProfesorLogComponent;
