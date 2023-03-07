import { FormControl, Input } from 'native-base';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
}

export const FormField = <T extends FieldValues>({
  label,
  name,
  control,
}: Props<T>) => {
  const { field, formState } = useController({
    control,
    name,
  });

  const message = formState.errors[name]?.message;

  return (
    <FormControl isInvalid={!!message}>
      <FormControl.Label _text={{ color: 'white' }}>{label}</FormControl.Label>

      <Input
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        variant="outline"
        bgColor="white"
        p={2}
      />

      <FormControl.ErrorMessage position="absolute" bottom="-20">
        {message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
