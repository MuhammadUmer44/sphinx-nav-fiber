import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import CheckIcon from '~/components/Icons/CheckIcon'
import PersonIcon from '~/components/Icons/PersonIcon'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  node: Node
}

export const UserHoverCard = ({ node }: Props) => {
  const properties = node.properties || {}

  const {
    username,
    twitter_handle: twitterHandle,
    image_url: imageUrl,
    followers: followersCount,
    verified,
    alias,
  } = properties as {
    username?: string
    twitter_handle?: string
    image_url?: string
    followers?: number
    verified?: boolean
    alias?: string
  }

  const displayName = alias || twitterHandle || username || ''
  const displaySubName = twitterHandle || alias || username || ''

  let profileUrl = ''

  if (username) {
    profileUrl = `https://x.com/${alias}`
  } else if (twitterHandle) {
    profileUrl = `https://x.com/${twitterHandle}`
  }

  return (
    <UserTooltipContainer>
      <UserContentWrapper>
        <AvatarSection>
          {imageUrl ? (
            <UserAvatar alt={displayName} src={imageUrl} />
          ) : (
            <DefaultAvatar>
              <PersonIcon />
            </DefaultAvatar>
          )}
        </AvatarSection>

        <UserInfoSection>
          <UserNameRow>
            <UserDisplayName href={profileUrl} target="_blank">
              {displayName}
            </UserDisplayName>
            {verified && (
              <VerifiedBadge>
                <CheckIcon />
              </VerifiedBadge>
            )}
          </UserNameRow>
          <UserDisplaySubName href={profileUrl} target="_blank">
            @{displaySubName}
          </UserDisplaySubName>
          {followersCount && <FollowersCount>{followersCount.toLocaleString()} Followers</FollowersCount>}
        </UserInfoSection>
      </UserContentWrapper>
    </UserTooltipContainer>
  )
}

const TooltipContainer = styled(Flex)`
  width: 390px;
  min-height: 100px;
  background: ${colors.HOVER_CARD_BG};
  border-radius: 8px;
  padding: 15px;
  padding-bottom: 3px !important;
  flex-direction: column;
  gap: 4px;
  pointer-events: auto;
  align-items: flex-start;
`

const UserTooltipContainer = styled(TooltipContainer)`
  width: fit-content;
  min-width: 180px;
  max-width: 300px;
  min-height: auto;
  border-radius: 16px;
  overflow: hidden;
`

const UserContentWrapper = styled(Flex)`
  display: grid;
  width: fit-content;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  padding-bottom: 15px;
`

const AvatarSection = styled(Flex)`
  margin-right: 10px;
`

const DefaultAvatar = styled(Flex)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 24px;
`

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const UserInfoSection = styled(Flex)`
  flex-direction: column;
  gap: 2px;
`

const UserNameRow = styled(Flex)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-wrap: nowrap;
  width: 100%;
`

const UserDisplayName = styled.a`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 700;
  color: ${colors.white};
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  &:hover {
    text-decoration: underline;
  }
`

const UserDisplaySubName = styled.a`
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  color: ${colors.white};
  opacity: 0.6;
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  &:hover {
    text-decoration: underline;
  }
`

const VerifiedBadge = styled(Flex)`
  background: #1d9bf0;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  svg {
    width: 12px;
    height: 12px;
    color: ${colors.BG1_HOVER};
  }
`

const FollowersCount = styled(Text)`
  font-family: 'Barlow';
  font-size: 13px;
  color: ${colors.white};
  opacity: 0.6;
  line-height: 1.2;
  margin-top: 4px;
`
