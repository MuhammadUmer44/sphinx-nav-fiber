import { FC } from 'react'
import styled from 'styled-components'
import ArrowRight from '~/components/Icons/ArrowRight'
import FlipIcon from '~/components/Icons/FlipIcon'
import NodeCircleIcon from '~/components/Icons/NodeCircleIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { ToNode } from './ToNode'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'

type Props = {
  selectedType: string
  selectedToNode: string
  isSwapped: boolean
  setIsSwapped: () => void
  selectedFromNode: string
  setSelectedFromNode: (type: string) => void
  setSelectedToNode: (type: string) => void
}

interface SectionProps {
  swap: boolean
}

export const TitleEditor: FC<Props> = ({
  selectedType,
  selectedToNode,
  setIsSwapped,
  isSwapped,
  selectedFromNode,
  setSelectedFromNode,
  setSelectedToNode,
}) => {
  const handleButtonClick = () => {
    setIsSwapped()
  }

  return (
    <Flex mb={20}>
      <Flex align="center" direction="row" justify="space-between" mb={35}>
        <Flex align="center" direction="row">
          <StyledText>Add Edge</StyledText>
        </Flex>
      </Flex>

      <Div swap={isSwapped}>
        <Flex>
          <ToSection>
            <ToLabel>{isSwapped ? 'To' : 'From'}</ToLabel>
            <ToNode dataTestId="from_node" onSelect={setSelectedFromNode} selectedValue={selectedFromNode} />
          </ToSection>
        </Flex>

        <Flex my={25}>
          <StyledLabels>Type</StyledLabels>
          <TextInput
            id="cy-item-name"
            maxLength={250}
            name="type"
            placeholder="Enter type name"
            rules={{
              ...requiredRule,
            }}
            value={selectedType}
          />
        </Flex>

        <Flex>
          <ToSection>
            <ToLabel>{!isSwapped ? 'To' : 'From'}</ToLabel>
            <ToNode dataTestId="to_node" onSelect={setSelectedToNode} selectedValue={selectedToNode} />
          </ToSection>
        </Flex>

        <NodeConnectorDiv>
          <IconTopContainer>
            <NodeCircleIcon />
          </IconTopContainer>
          <IconMidContainer onClick={handleButtonClick}>
            <FlipIcon />
          </IconMidContainer>
          <IconBottomContainer>
            <ArrowRight />
          </IconBottomContainer>
        </NodeConnectorDiv>
      </Div>
    </Flex>
  )
}

const NodeConnectorDiv = styled.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
`

const Div = styled.div<SectionProps>`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${(props) => (props.swap ? 'column-reverse' : 'column')};
  margin-bottom: 10px;
  padding-left: 38px;
`

const ToSection = styled.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 1;
  display: flex;
  align-items: center;
`

const StyledLabels = styled.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`

const ToLabel = styled.label`
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`

const IconTopContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`

const IconMidContainer = styled.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

const IconBottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`