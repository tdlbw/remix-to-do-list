import { useTranslation } from 'react-i18next'
import { Form, useLoaderData } from 'remix'
import AvatarLock from '~/components/AvatarLock'

import { Alert, Box, Grid, Link, Paper, TextField, Typography } from '@mui/material'

import { BaseGrid, Container, ImageGrid, StyledButton, Window } from './styles'

import type { LoaderData } from '~/types/loader'

export default function SignIn() {
  const { error } = useLoaderData<LoaderData>()
  const { t } = useTranslation('registration')
  return (
    <Window>
      <BaseGrid container>
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
          <Container>
            <AvatarLock />
            <Typography component="h1" variant="h5">
              {t('signUp')}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Form method="post">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t('email')}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField margin="normal" required fullWidth id="name" label={t('name')} name="name" autoFocus />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={t('password')}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label={t('confirmPassword')}
                  type="password"
                  id="confirmPassword"
                />
                {error && <Alert severity="error">{t(error.message)}</Alert>}
                <StyledButton type="submit" fullWidth variant="contained">
                  {t('signUp')}
                </StyledButton>
              </Form>
              <Grid container>
                <Link href="/sign-in" variant="body2">
                  {t('haveAccount')}
                </Link>
              </Grid>
            </Box>
          </Container>
        </Grid>
        <ImageGrid item xs={false} sm={4} md={9} />
      </BaseGrid>
    </Window>
  )
}
