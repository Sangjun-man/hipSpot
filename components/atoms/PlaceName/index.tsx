import styled from "@emotion/styled";

export interface PlaceNameCssProps {
  fontSize?: number | string;
  color?: string;
}
export interface PlaceNameProps extends PlaceNameCssProps {
  name: string;
}

const PlaceName = ({
  name,
  fontSize = 1.5,
  color = "rgba(228, 66, 105, 1)",
}: PlaceNameProps) => {
  return (
    <StyledPlaceName fontSize={fontSize} color={color}>
      {name}
    </StyledPlaceName>
  );
};

export default PlaceName;

const StyledPlaceName = styled.div<PlaceNameCssProps>`
  font-size: ${(props) =>
    typeof props.fontSize === "string"
      ? props.fontSize
      : props.fontSize + "rem"};
  color: ${(props) => props.color};
  font-weight: 800;
`;
