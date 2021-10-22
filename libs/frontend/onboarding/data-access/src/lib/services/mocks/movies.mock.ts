import { of } from 'rxjs';

const POPULAR_MOVIES_MOCK = [
  {
    id: 1,
    imageUrl: 'https://image.tmdb.org/t/p/w500/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
    overview:
      'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
    title: 'Cruella',
  },
  {
    id: 1,
    imageUrl: 'https://image.tmdb.org/t/p/w500/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
    overview:
      'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
    title: 'Cruella',
  },
  {
    id: 1,
    imageUrl: 'https://image.tmdb.org/t/p/w500/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
    overview:
      'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
    title: 'Cruella',
  },
  {
    id: 1,
    imageUrl: 'https://image.tmdb.org/t/p/w500/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
    overview:
      'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
    title: 'Cruella',
  },
];

const MOVIE_DETAILS_MOCK = {
  title: 'Cruella',
  imageUrl: 'https://image.tmdb.org/t/p/w500/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
  overview:
    'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
  releaseDate: '2021-05-26',
  genres: [
    { id: 1, name: 'Comedy' },
    { id: 2, name: 'Crime' },
  ],
  runtime: 134,
  voteAverage: 8.7,
  progressBarTitle: 'User Score',
};

const MOVIE_CAST_MOCK = [
  {
    name: 'Emma Stone',
    character: 'Estella / Cruella',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg',
  },
  {
    name: 'Emma Stone',
    character: 'Estella / Cruella',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg',
  },
  {
    name: 'Emma Stone',
    character: 'Estella / Cruella',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg',
  },
  {
    name: 'Emma Stone',
    character: 'Estella / Cruella',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg',
  },
  {
    name: 'Emma Stone',
    character: 'Estella / Cruella',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg',
  },
];

const MOVIE_CREW_MOCK = [
  {
    name: 'Marc Platt',
    job: 'Producer',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/1V51JQqDdoXnC4LElFfSPSjYGfY.jpg',
  },
  {
    name: 'Marc Platt',
    job: 'Producer',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/1V51JQqDdoXnC4LElFfSPSjYGfY.jpg',
  },
  {
    name: 'Marc Platt',
    job: 'Producer',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/1V51JQqDdoXnC4LElFfSPSjYGfY.jpg',
  },
  {
    name: 'Marc Platt',
    job: 'Producer',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/1V51JQqDdoXnC4LElFfSPSjYGfY.jpg',
  },
  {
    name: 'Marc Platt',
    job: 'Producer',
    profileUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/1V51JQqDdoXnC4LElFfSPSjYGfY.jpg',
  },
];

export function getPopularMoviesMock() {
  return of(POPULAR_MOVIES_MOCK);
}

export function getTopRatedMoviesMock() {
  return of(POPULAR_MOVIES_MOCK);
}

export function getMovieDetailsMock() {
  return of(MOVIE_DETAILS_MOCK);
}

export function getMovieCastMock() {
  return of(MOVIE_CAST_MOCK);
}

export function getMovieCrewMock() {
  return of(MOVIE_CREW_MOCK);
}
