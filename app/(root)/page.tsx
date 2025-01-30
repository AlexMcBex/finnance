import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
const loggedIn ={
  firstName : "Alex",
  lastName: "Smith",
  email:"email@alex.com"
}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1286432.96}
          />

        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  )
}

export default Home