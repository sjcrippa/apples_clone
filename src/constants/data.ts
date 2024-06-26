import {
  blackImg,
  blueImg,
  hlFirstVideo,
  hlFourthVideo,
  hlSecondVideo,
  hlThirdVideo,
  whiteImg,
  yellowImg
} from '@/utils/data'
import type { ModelProps } from '@/utils/types'

export const navItems = [
  { name: 'Store', hash: '#store' },
  { name: 'Mac', hash: '#mac' },
  { name: 'iPhone', hash: '#iPhone' },
  { name: 'Support', hash: '#support' }
] as const

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      'Enter A17 Pro.',
      'Game‑changing chip.',
      'Groundbreaking performance.'
    ],
    video: hlFirstVideo,
    videoDuration: 4
  },
  {
    id: 2,
    textLists: ['Titanium.', 'So strong. So light. So Pro.'],
    video: hlThirdVideo,
    videoDuration: 5
  },
  {
    id: 3,
    textLists: [
      'iPhone 15 Pro Max has the',
      'longest optical zoom in',
      'iPhone ever. Far out.'
    ],
    video: hlSecondVideo,
    videoDuration: 2
  },
  {
    id: 4,
    textLists: ['All-new Action button.', 'What will yours do?.'],
    video: hlFourthVideo,
    videoDuration: 3.63
  }
]

export const models: ModelProps[] = [
  {
    id: 1,
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg
  },
  {
    id: 2,
    title: 'iPhone 15 Pro in Blue Titanium',
    color: ['#53596E', '#6395ff', '#21242e'],
    img: blueImg
  },
  {
    id: 3,
    title: 'iPhone 15 Pro in White Titanium',
    color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
    img: whiteImg
  },
  {
    id: 4,
    title: 'iPhone 15 Pro in Black Titanium',
    color: ['#454749', '#3b3b3b', '#181819'],
    img: blackImg
  }
] as const

export const sizes = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' }
] as const
