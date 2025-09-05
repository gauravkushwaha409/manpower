import InputText from "@/components/form/InputText.tsx";

const LocationForm = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <InputText
          label="Location Name"
          name="locationName"
          placeholder="Enter Location Name"
        />
        <InputText
          label="Location Image"
          name="locationImage"
          placeholder="Enter Location Image"
        />
      </div>
    </>
  );
};

export default LocationForm;
