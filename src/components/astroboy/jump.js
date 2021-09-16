import { Player } from '@lottiefiles/react-lottie-player'

const AstroboyJump = () => (
  <div className="astroboy-jump mx-auto">
    <Player
      autoplay
      loop
      mode="normal"
      src="/animations/astroboy_jump.json" />
  </div>
)

export default AstroboyJump
