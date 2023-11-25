// import emailjs from "@emailjs/browser";
function SendEmail(props) {
  console.log("SendEmail", props);
  props.e.preventDefault();
  console.log(props);
  //   emailjs
  //     .sendForm(
  //       "studentcare_4406d89",
  //       "template_mh03ego",
  //       props.e.target,
  //       "02u7DxdZhPaf0dxmB"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("result:", result);
  //         // window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   return <div>SendEmail</div>;
}

export default SendEmail;
