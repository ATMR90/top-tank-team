import { TanksDataType } from '../types'

export const TanksData: TanksDataType[] = [
  {
    name: 'Liberty',
    resourceСost: 8,
    bringsResources: 2,
    tier: 1,
    type: 'тяжёлый',
    nation: 'USA',
    damage: 4,
    health: 7,
  },
  {
    name: 'T6',
    resourceСost: 5,
    bringsResources: 1,
    tier: 1,
    type: 'средний',
    nation: 'USA',
    damage: 2,
    health: 7,
  },
  {
    name: 'T-24',
    resourceСost: 5,
    bringsResources: 1,
    tier: 1,
    type: 'средний',
    nation: 'USSR',
    damage: 1,
    health: 9,
  },
  {
    name: 'T-35-1',
    resourceСost: 6,
    bringsResources: 1,
    tier: 1,
    type: 'тяжёлый',
    nation: 'USSR',
    damage: 3,
    health: 9,
  },
  {
    name: 'T-21',
    resourceСost: 5,
    bringsResources: 1,
    tier: 1,
    type: 'средний',
    nation: 'German',
    damage: 3,
    health: 5,
  },
  {
    name: 'A7V',
    resourceСost: 4,
    bringsResources: 1,
    tier: 1,
    type: 'тяжёлый',
    nation: 'German',
    damage: 2,
    health: 8,
  },
  {
    name: 'СУ-26',
    resourceСost: 6,
    bringsResources: 1,
    tier: 3,
    type: 'САУ',
    nation: 'USSR',
    damage: 1,
    health: 4,
    specialProperties: {
      USSR: 'Когда другая ваша техника в ваш ход обнаруживает технику противника - СУ-26 проводит дополнительную атаку по обнаруженной технике',
    },
  },
  {
    name: 'СУ-18',
    resourceСost: 1,
    bringsResources: 0,
    tier: 1,
    type: 'САУ',
    nation: 'USSR',
    damage: 1,
    health: 2,
  },
  {
    name: 'Marder II',
    resourceСost: 3,
    bringsResources: 1,
    tier: 3,
    type: 'ПТ-САУ',
    nation: 'German',
    damage: 3,
    health: 2,
    specialProperties: { German: 'Блиц' },
  },
  {
    name: 'Panzerjager I',
    resourceСost: 4,
    bringsResources: 0,
    tier: 1,
    type: 'ПТ-САУ',
    nation: 'German',
    damage: 3,
    health: 3,
  },
  {
    name: 'Pz35(t)',
    resourceСost: 2,
    bringsResources: 0,
    tier: 2,
    type: 'лёгкий',
    nation: 'German',
    damage: 2,
    health: 4,
    specialProperties: {
      German: '+2 к приросту ресурсов, пока у вас есть САУ',
    },
  },
  {
    name: 'Pz38(t)',
    resourceСost: 4,
    bringsResources: 0,
    tier: 3,
    type: 'лёгкий',
    nation: 'German',
    damage: 3,
    health: 4,
    specialProperties: { German: '+2 к приросту ресурсов' },
  },
  {
    name: 'Pz38H (f)',
    resourceСost: 3,
    bringsResources: 1,
    tier: 3,
    type: 'лёгкий',
    nation: 'German',
    damage: 1,
    health: 5,
    specialProperties: { German: 'Охранение' },
  },
  {
    name: 'Bison',
    resourceСost: 3,
    bringsResources: 0,
    tier: 3,
    type: 'САУ',
    nation: 'German',
    damage: 1,
    health: 3,
    specialProperties: { German: 'Блиц' },
  },
  {
    name: 'T-15',
    resourceСost: 2,
    bringsResources: 0,
    tier: 3,
    type: 'лёгкий',
    nation: 'German',
    damage: 1,
    health: 5,
    specialProperties: { German: '-2 к стоимости' },
  },
  {
    name: 'Locust',
    resourceСost: 3,
    bringsResources: 1,
    tier: 3,
    type: 'лёгкий',
    nation: 'USA',
    damage: 1,
    health: 4,
    specialProperties: { USA: 'Может быть разыгран на центральную клетку боя' },
  },
  {
    name: 'T18',
    resourceСost: 4,
    bringsResources: 0,
    tier: 1,
    type: 'ПТ-САУ',
    nation: 'USA',
    damage: 2,
    health: 5,
  },
  {
    name: 'T2 MT',
    resourceСost: 5,
    bringsResources: 0,
    tier: 3,
    type: 'средний',
    nation: 'USA',
    damage: 1,
    health: 3,
    specialProperties: {
      USA: 'Разыгрывая этот танк, вы можете потратить N ресурсов, чтобы нанести своему штабу N повреждений и взять N карт из колоды',
    },
  },
  {
    name: 'T82',
    resourceСost: 3,
    bringsResources: 0,
    tier: 3,
    type: 'ПТ-САУ',
    nation: 'USA',
    damage: 4,
    health: 1,
    specialProperties: {
      USA: 'Если уничтожен атакой штаба или САУ - возьмите карту.',
    },
  },
  {
    name: 'АТ-1',
    resourceСost: 2,
    bringsResources: 1,
    tier: 3,
    type: 'ПТ-САУ',
    nation: 'USSR',
    damage: 2,
    health: 4,
    specialProperties: { USSR: 'Маскировка' },
  },
  {
    name: 'БТ-СВ',
    resourceСost: 3,
    bringsResources: 0,
    tier: 3,
    type: 'лёгкий',
    nation: 'USSR',
    damage: 1,
    health: 4,
    specialProperties: {
      all: 'Когда уничтожен - + 1 к приросту ресурсов вашего штаба',
    },
  },
  {
    name: 'Тетрарх',
    resourceСost: 3,
    bringsResources: 1,
    tier: 3,
    type: 'лёгкий',
    nation: 'USSR',
    damage: 1,
    health: 5,
  },
  {
    name: 'Т-26',
    resourceСost: 3,
    bringsResources: 0,
    tier: 3,
    type: 'лёгкий',
    nation: 'USSR',
    damage: 2,
    health: 4,
    specialProperties: { USSR: '+2 к приросту ресурсов' },
  },
  {
    name: 'Leichttraktor',
    resourceСost: 1,
    bringsResources: 0,
    tier: 1,
    type: 'лёгкий',
    nation: 'German',
    damage: 2,
    health: 2,
  },
  {
    name: 'T1 LT',
    resourceСost: 3,
    bringsResources: 1,
    tier: 1,
    type: 'лёгкий',
    nation: 'USA',
    damage: 2,
    health: 3,
  },
  {
    name: 'T7 Combat Car',
    resourceСost: 2,
    bringsResources: 0,
    tier: 1,
    type: 'лёгкий',
    nation: 'USA',
    damage: 3,
    health: 1,
  },
  {
    name: 'Pz II',
    resourceСost: 1,
    bringsResources: 1,
    tier: 3,
    type: 'лёгкий',
    nation: 'German',
    damage: 1,
    health: 3,
    specialProperties: {
      all: 'Охранение',
      German:
        'Если этот танк уничтожен атакой штаба или САУ - нанесите 2 повреждения штабу противника',
    },
  },
  {
    name: 'Pz S35',
    resourceСost: 3,
    bringsResources: 1,
    tier: 3,
    type: 'средний',
    nation: 'German',
    damage: 2,
    health: 6,
    specialProperties: {
      German: 'Когда уничтожен - замешайте эту карту из своих потерь в колоду',
    },
  },
  {
    name: 'БТ-2',
    resourceСost: 3,
    bringsResources: 0,
    tier: 2,
    type: 'лёгкий',
    nation: 'USSR',
    damage: 1,
    health: 6,
    specialProperties: {
      USSR: 'Пока у этого танка 3 или менее прочности - он получает +3 к приросту ресурсов.',
    },
  },
  {
    name: 'МС-1',
    resourceСost: 2,
    bringsResources: 1,
    tier: 1,
    type: 'лёгкий',
    nation: 'USSR',
    damage: 1,
    health: 4,
  },
  {
    name: 'M2 LT',
    resourceСost: 1,
    bringsResources: 1,
    tier: 2,
    type: 'лёгкий',
    nation: 'USA',
    damage: 1,
    health: 3,
    specialProperties: {
      USA: 'Маскировка',
    },
  },
  {
    name: 'M3 Stuart',
    resourceСost: 2,
    bringsResources: 1,
    tier: 3,
    type: 'лёгкий',
    nation: 'USA',
    damage: 1,
    health: 4,
    specialProperties: {
      all: 'Наносит на 1 повреждение больше лёгким танкам',
      USSR: 'Когда M3 Stuart выходит на поле боя - все САУ противника становятся обнаруженными до конца хода',
    },
  },
  {
    name: 'T57',
    resourceСost: 3,
    bringsResources: 1,
    tier: 3,
    type: 'САУ',
    nation: 'USA',
    damage: 1,
    health: 3,
    specialProperties: {
      USA: 'Маскировка.',
    },
  },
]