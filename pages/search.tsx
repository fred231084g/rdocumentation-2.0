/* eslint-disable sonarjs/no-duplicate-string */
import Head from 'next/head';
import { useRouter } from 'next/router';

import ClickableCard from '../components/ClickableCard';

const fakeSearchResults = [
  {
    description: 'A Grammar of Data Manipulation',
    extraInfo: 'package',
    href: '/packages/dplyr',
    id: 1,
    name: 'dplyr',
  },
  {
    description: 'Extension of Data.frame',
    extraInfo: 'package',
    href: '/packages/data.table',
    id: 2,
    name: 'data.table',
  },
  {
    description: 'Add new variables',
    extraInfo: 'function',
    href: '/packages/dplyr',
    id: 3,
    name: 'mutate (dplyr)',
  },
  {
    description: 'Merge two data.tables',
    extraInfo: 'function',
    href: '/packages/data.table',
    id: 4,
    name: 'merge (data.table)',
  },
  {
    description: 'Simple, Consistent Wrappers for Common String Operations',
    extraInfo: 'package',
    href: '/packages/stringr',
    id: 5,
    name: 'stringr',
  },
  {
    description: 'Fast and friendly file finagler',
    extraInfo: 'function',
    href: '/packages/data.table',
    id: 6,
    name: 'fread (data.table)',
  },
  {
    description: 'Learn R, in R',
    extraInfo: 'package',
    href: '/packages/swirl',
    id: 7,
    name: 'swirl',
  },
  {
    description: 'Truncate a character string.',
    extraInfo: 'function',
    href: '/packages/stringr',
    id: 8,
    name: 'str_trunc (stringr)',
  },
];

export default function SearchResults() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <Head>
        <title>Results for '{q}' | RDocumentation</title>
      </Head>
      <div className="w-full max-w-screen-lg mx-auto mt-12">
        <h1 className="text-xl">Search results for '{q}':</h1>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {fakeSearchResults.map((result) => (
            <ClickableCard
              description={result.description}
              extraInfo={result.extraInfo}
              href={result.href}
              id={result.id}
              key={result.id}
              name={result.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}