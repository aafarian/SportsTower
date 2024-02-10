import { type PlayerData } from '../index.d';
export const projectionsFixture: PlayerData[] = [
  {
    playerName: 'Kawhi Leonard',
    playerImage: 'kawhi.jpg',
    projections: [
      { projectionId: '1213', category: 'Rebounds', value: 7.5 },
      { projectionId: '1214', category: 'Points', value: 24.5 },
      { projectionId: '1215', category: 'Steals', value: 1.5 },
      { projectionId: '1216', category: 'Free Throws Made', value: 6.5 },
    ]
  },
  {
    playerName: 'Stephen Curry',
    playerImage: 'steph.jpg',
    projections: [
      { projectionId: '1313', category: '3 Pointers Made', value: 4.5 },
      { projectionId: '1314', category: 'Points', value: 26.5 },
      { projectionId: '1315', category: 'Steals', value: 0.5 },
      { projectionId: '1316', category: 'Turnovers', value: 2.5 },
    ]
  },
  {
    playerName: 'Jayson Tatum',
    playerImage: 'jayson.jpg',
    projections: [
      { projectionId: '1413', category: '3 Pointers Made', value: 3.5 },
      { projectionId: '1414', category: 'Points', value: 29.5 },
      { projectionId: '1415', category: 'Rebounds', value: 8.5 },
      { projectionId: '1416', category: 'Assists', value: 3.5 },
      { projectionId: '1417', category: 'Free Throws Made', value: 3.5 },
    ]
  },
  {
    playerName: 'Nikola Jokic',
    playerImage: 'nikola.jpg',
    projections: [
      { projectionId: '1513', category: '3 Pointers Made', value: 3.5 },
      { projectionId: '1514', category: 'Points', value: 29.5 },
      { projectionId: '1515', category: 'Rebounds', value: 8.5 },
      { projectionId: '1516', category: 'Assists', value: 3.5 },
      { projectionId: '1517', category: 'Free Throws Made', value: 3.5 },
    ]
  }
];
