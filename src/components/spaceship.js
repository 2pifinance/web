import { Player } from '@lottiefiles/react-lottie-player'

const Spaceship = () => (
  <div className="mx-auto my-3">
    <Player
      autoplay
      loop
      mode="normal"
      src="/animations/spaceship.json" />
  </div>
)

export default Spaceship
