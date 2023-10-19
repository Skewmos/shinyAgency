import { isRouteErrorResponse, useRouteError } from "react-router-dom";


const Error = () => {
  const error: unknown = useRouteError();
  console.error(error);

  const ErrorMessage = () => {
    let errorMessage: string;
    if (isRouteErrorResponse(error)) {
      errorMessage =  error.statusText;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else {
      console.error(error);
      errorMessage = 'Unknown error';
    }

    return errorMessage
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <ErrorMessage/>
      </p>
    </div>
  );
};

export default Error;