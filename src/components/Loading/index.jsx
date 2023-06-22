import { Spinner } from '@chakra-ui/react';

export function Loading({ ...props }) {
  return (
      <Spinner
          {...props}
      />
  );
}
