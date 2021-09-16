import { Player } from '@lottiefiles/react-lottie-player'

const AstroboyRoll = () => (
  <div className="mx-auto my-3">
    <Player
      autoplay
      loop
      mode="normal"
      src="/animations/astroboy_roll.json" />
  </div>
)

export default AstroboyRoll
