import { Player } from '@lottiefiles/react-lottie-player'

const AstroboyRide = () => (
  <div className="mx-auto my-3">
    <Player
      autoplay
      loop
      mode="normal"
      src="/animations/astroboy_ride.json" />
  </div>
)

export default AstroboyRide
