const HomeLayout = ({ firstCard, secondCard, children }: Props) => {
  return (
    <div className=" grid grid-cols-2">
      {firstCard}
      {secondCard}
      {children}
    </div>
  )
}

export default HomeLayout

interface Props {
  firstCard: React.ReactNode
  secondCard: React.ReactNode
  children: React.ReactNode
}