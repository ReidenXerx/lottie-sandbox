import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Slide from "@mui/material/Slide"
import Typography from "@mui/material/Typography"

type BattleOutcomeProps = {
  outcome: "Victory" | "Defeat" | null
}

const BattleOutcome: React.FC<BattleOutcomeProps> = ({ outcome }) => {
  if (!outcome) return null

  return (
    <Slide direction="up" in={Boolean(outcome)} mountOnEnter unmountOnExit>
      <Card variant="outlined" style={{ marginTop: "20px" }}>
        <CardContent>
          <Typography
            variant="h4"
            color={outcome === "Victory" ? "green" : "red"}
          >
            {outcome}
          </Typography>
        </CardContent>
      </Card>
    </Slide>
  )
}

export default BattleOutcome
