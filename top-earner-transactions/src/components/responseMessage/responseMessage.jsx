
import "./responseMessage.css";

const ResponseMessage = ({ response }) => {

  const textStyle = response.status === 200 ? "response-success" : "response-error";

  let customMessage = "";
  switch (response.status) {
    case 200:
      customMessage = "Success";
      break;
    case 400:
      customMessage = "Incorrect value in result, no ID specified or value is invalid ";
      break;
    case 404:
      customMessage = "Value not found for specified ID";
      break;
    case 503:
      customMessage = "Error communicating with database";
      break;
    default:
      break;
  }

  return (
    <div className={textStyle}>
      {response.message} - {customMessage}
    </div>
  )

}

export default ResponseMessage;