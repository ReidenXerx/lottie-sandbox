import Fade from "@mui/material/Fade"
import Paper from "@mui/material/Paper"
import lottie, { AnimationItem } from "lottie-web"
import React, { useEffect, useRef } from "react"
import animationData from "../assets/animation/Animation_-_1705438965953.json"

type BattleAnimationProps = {
  isPlaying: boolean
  onAnimationEnd: () => void
}

const BattleAnimation: React.FC<BattleAnimationProps> = ({
  isPlaying,
  onAnimationEnd,
}) => {
  const animationContainerRef = useRef<HTMLDivElement>(null)
  const animationInstanceRef = useRef<AnimationItem>(null)

  const restAnimation = () => {
    if (animationInstanceRef.current) {
      animationInstanceRef.current.destroy()
      ;(
        animationInstanceRef as React.MutableRefObject<AnimationItem | null>
      ).current = null
    }
  }

  useEffect(() => {
    if (animationContainerRef.current) {
      restAnimation()
      ;(
        animationInstanceRef as React.MutableRefObject<AnimationItem | null>
      ).current = lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData,
      })
      if (isPlaying) {
        animationInstanceRef.current?.play()
        setTimeout(() => {
          animationInstanceRef.current?.stop()
          onAnimationEnd()
        }, 10000)
      }
    }

    return () => {
      restAnimation()
    }
  }, [isPlaying, onAnimationEnd])

  useEffect(() => {
    return () => {
      restAnimation()
    }
  }, [])

  return (
    <Fade in={isPlaying}>
      <Paper elevation={4} style={{ padding: "20px", marginTop: "20px" }}>
        <div
          ref={animationContainerRef}
          style={{ width: "100%", height: "300px" }}
        />
      </Paper>
    </Fade>
  )
}

export default BattleAnimation
