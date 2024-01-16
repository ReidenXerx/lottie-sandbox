// src/components/BattleButton.tsx
import Button from "@mui/material/Button"
import Zoom from "@mui/material/Zoom"
import { styled } from "@mui/material/styles"

const StyledButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  fontWeight: "bold",
  marginTop: "20px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 10px 2px rgba(255, 105, 135, .5)",
  },
})

type BattleButtonProps = {
  onStartBattle: () => void
}

const BattleButton: React.FC<BattleButtonProps> = ({ onStartBattle }) => {
  return (
    <Zoom in={true}>
      <StyledButton onClick={onStartBattle}>Start Battle</StyledButton>
    </Zoom>
  )
}

export default BattleButton
