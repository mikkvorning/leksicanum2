import { useEffect } from 'react';
import { useSearchResultsProvider } from '../Search/SearchResultsProvicer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  capitalize,
} from '@mui/material';
import theme from '../../theme';

const HomePage = () => {
  const { searchResults } = useSearchResultsProvider();

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  if (searchResults && !!searchResults.length)
    return (
      <>
        {searchResults.map((result, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant={'h3'}>{result.name}</Typography>
              <Typography variant={'subtitle2'}>{result.category}</Typography>

              <Box
                my={2}
                sx={{
                  b: {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <Typography variant={'subtitle2'}>
                  <b>Condition: </b>
                  {result.condition}
                </Typography>
                <Typography variant={'subtitle2'}>
                  {result.description}
                </Typography>
                <Typography variant={'subtitle2'}>
                  <b>Effect: </b>
                  {result.effect}
                </Typography>
                <Typography variant={'subtitle2'}>
                  <b>Cost: </b>
                  {result.cost}
                </Typography>
                <Typography variant={'subtitle2'}>
                  <b>Phase: </b>
                  {result.phase.toString()}
                </Typography>
                <Typography variant={'body2'}>
                  <i>{result.quote}</i>
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button variant={'outlined'}>Some button</Button>
            </CardActions>
          </Card>
        ))}
      </>
    );
  else
    return (
      <Typography variant={'h3'}>
        This page of the Leksicanum has not yet been filled out, or maybe it has
        been deemed forbidden knowledge by the Inqusitional Ordo Redactus.
      </Typography>
    );
};

export default HomePage;
