import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getWeatherByCityNameAction } from "@/action/server.action";
import { CircularProgress, Stack } from "@mui/material";
import { UseAppContext } from "@/context";
import InputTextComponent from "@/components/UI/Input/InputText.component";
import { InputButton } from "@/components/UI/Input/InputButton.component";

interface FormInputs {
  place: string;
}

export const HomeForm = () => {
  const [loading, setLoading] = useState(false);
  const { setCurrentPlace } = UseAppContext();
  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true);
    const res = await getWeatherByCityNameAction(data.place);
    if (res) {
      setCurrentPlace(res);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Stack>
      )}
      {!loading && (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid" }}>
          <InputTextComponent
            variant="outlined"
            required
            label="Select Place"
            id="place"
            {...register("place")}
          />
          <InputButton
            text="search"
            variant="outlined"
            type="submit"
            sx={{ marginTop: 2 }}
          />
        </form>
      )}
    </>
  );
};
