import { GITHUB_REPOSITORY, RSS, TWITTER_HANDLE, YOUTUBE_CHANNEL } from '~/constants'
import { ISourceMap } from './types'
import styled from 'styled-components'
import { IconButton } from '@mui/material'

export const sourcesMapper: ISourceMap = {
  [RSS]: 'RSS link',
  [TWITTER_HANDLE]: 'Twitter Handle',
  [YOUTUBE_CHANNEL]: 'Youtube channel',
  [GITHUB_REPOSITORY]: 'Github Repository',
}

export const SOURCE_TABLE = 'Sources Table'
export const QUEUED_SOURCES = 'Queued Sources'
export const TOPICS = 'Topics'
export const VIEW_CONTENT = 'View Content'

export const DATE = 'date'
export const EDGE_COUNT = 'edge_count'
export const ALPHABETICALLY = 'alphabetically'

type Option = Record<string, string>

export const SORT_MAPPING: Option = {
  [DATE]: 'Date',
  [EDGE_COUNT]: 'Edge Count',
  [ALPHABETICALLY]: 'Alphabetically',
}

export const TWITTER_LINK = 'https://twitter.com'

export const IS_ALIAS = 'IS_ALIAS'

export const TWITTER_CONTENT_LINK = 'https://www.twitter.com/anyuser/status/'

export const StyledIconButton = styled(IconButton)`
  && {
    vertical-align: middle;
    margin: 5px 0 0 4px;
    padding: 4px;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
