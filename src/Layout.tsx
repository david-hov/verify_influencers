import { Container } from '@mui/material';
import type { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => (
    <Container maxWidth='xl'>
        {children}
    </Container>
);
