import { useQuery } from 'react-query';
import searchClient from '../../config/algolia';
import { Stratagem } from '../../models/Stratagem';
import { useSearchResultsProvider } from './SearchResultsProvicer';

interface HighlightResult {
  value: string;
  matchLevel: string;
  fullyHighlighted?: boolean;
  matchedWords: string[];
}

interface LastModified {
  _operation: string;
  value: number;
}

export interface StratagemHit extends Stratagem {
  objectID: string;
  path: string;
  lastmodified: LastModified;
  _highlightResult: Record<string, HighlightResult>;
}

interface AlgoliaResponse {
  hits: StratagemHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  query: string;
  params: string;
  renderingContent: Record<string, unknown>;
  processingTimeMS: number;
  processingTimingsMS: {
    _request: {
      roundTrip: number;
    };
  };
}

const searchQuery = async (input: string) => {
  const { hits } = await searchClient
    .initIndex('leksicanum')
    .search<AlgoliaResponse>(input);
  return hits.map((hit) => {
    const { objectID, path, lastmodified, _highlightResult, ...stratagem } =
      hit as unknown as StratagemHit;
    return stratagem as Stratagem;
  });
};

export const useSearch = (input: string) => {
  const { setSearchResults } = useSearchResultsProvider();
  return useQuery(['search', input], () => searchQuery(input), {
    enabled: !!input,
    onSuccess: setSearchResults,
  });
};
