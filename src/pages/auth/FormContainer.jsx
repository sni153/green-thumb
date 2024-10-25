/* eslint-disable react/prop-types */
const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <div className="relative hidden md:flex">
        <img
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png
"
          className="h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-800/20"></div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen bg-green-50 flex-1">
        <div className="flex flex-col items-center">
          <img
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
            className="w-16 mb-2"
          />
          <div className="font-playfair text-3xl text-emerald-700">
            Green Thumb Plants
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
