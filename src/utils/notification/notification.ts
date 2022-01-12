
import { GraphQLError } from 'graphql';
import { store } from 'react-notifications-component';

type Rnc = {
  type: 'success' | 'danger' | 'info' | 'default' | 'warning',
  message: string;
  title: string;
}

export const showNotification = ({type, message, title}: Rnc) => {

  store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
      showIcon: true,
    }
  });

}

export const mapErrorMessages = (graphQlErrorMessages: readonly GraphQLError[] | undefined) => {

  if(!graphQlErrorMessages){
    return;
  }

  graphQlErrorMessages.forEach(x => {
    if(x.extensions?.code === 'BAD_USER_INPUT') {
      showNotification({message: x.message, title: 'Error', type: 'danger'});
    }
  });

}