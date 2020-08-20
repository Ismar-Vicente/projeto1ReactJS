import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavHeader from '../../components/NavHeader';
import MyCards from '../../components/MyCards';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

}));

const cards = [
  {
    id: 1,
    image: 'https://controlf5mkt.com.br/blog/wp-content/uploads/2019/01/110-Mentalidade-digital-o-que-%C3%87-e-como-criar.jpg',
    title: 'Cérebro',
    description: 'Cérebro digital'
  },
  {
    id: 2,
    image: 'https://image.freepik.com/vetores-gratis/fundo-de-design-futurista_23-2148491663.jpg',
    title: 'Arte Digital',
    description: 'Arte - Circulo tecnológico'
  },
  {
    id: 3,
    image: 'https://gestiona.com.br/wp-content/uploads/2020/05/projeto-de-conceito-abstrato-tecnologia-digital-fundo-futurista_1017-22917.jpg',
    title: 'Tecnologia',
    description: 'Arte - Círulo tecnológico'
  },
  {
    id: 4,
    image: 'https://www.blog.ipv7.com.br/wp-content/uploads/2018/10/T%C3%BAnel-Digital-665x414.jpg',
    title: 'Tecnologia',
    description: 'Túnel digital'
  }




];

function App() {
  const classes = useStyles();

  return (
    <>
      <NavHeader />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Mundo Digital
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Este é o meu Primeiro Projeto em React
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Entrar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <MyCards data={cards} />

        </Container>
      </main>

      <Footer />

    </>
  );
}

export default App;