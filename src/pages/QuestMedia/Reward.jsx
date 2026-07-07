import "../styles/RewardCenter.css";

function RewardCenter() {
  return (
    <div className="reward-container">

      <div className="wallet-card">
        <h1>Reward Center</h1>
        <p>Your GreenCoins Wallet</p>
        <p className="user-level">Gold Member</p>
        <div className="coin-balance">1250 GreenCoins</div>
        <div className="progress-bar">
  <div className="progress-fill"></div>
</div>

<p>1250 / 2000 Coins to Platinum</p>
      </div>

      <div className="reward-section">
        <h2>Featured Rewards</h2>

        <div className="reward-grid">

          <div className="reward-card">
            <h3>Amazon Gift Card</h3>
            <p>₹100 Voucher</p>
            <p>Cost: 500 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

          <div className="reward-card">
            <h3>Flipkart Voucher</h3>
            <p>₹100 Voucher</p>
            <p>Cost: 400 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

          <div className="reward-card">
            <h3>Swiggy Coupon</h3>
            <p>Food Discount Coupon</p>
            <p>Cost: 300 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

        </div>
      </div>

      <div className="reward-section">
        <h2>Food & Drinks</h2>

        <div className="reward-grid">

          <div className="reward-card">
            <h3>Free Coffee</h3>
            <p>Café Reward</p>
            <p>Cost: 250 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

          <div className="reward-card">
            <h3>Pizza Discount</h3>
            <p>Food Voucher</p>
            <p>Cost: 450 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

          <div className="reward-card">
            <h3>Burger Combo</h3>
            <p>Special Combo Offer</p>
            <p>Cost: 350 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

        </div>
      </div>

      <div className="reward-section">
        <h2>Eco Rewards</h2>

        <div className="reward-grid">

          <div className="reward-card">
            <h3>Plant a Tree</h3>
            <p>Support Tree Plantation</p>
            <p>Cost: 200 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

          <div className="reward-card">
            <h3>Adopt a Sapling</h3>
            <p>Environmental Initiative</p>
            <p>Cost: 500 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

          <div className="reward-card">
            <h3>Clean Beach Support</h3>
            <p>Community Cleanup Fund</p>
            <p>Cost: 1000 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

        </div>
      </div>

      <div className="reward-section">
        <h2>Mystery Rewards</h2>

        <div className="reward-grid">

          <div className="reward-card">
            <h3>Lucky Spin</h3>
            <p>Try Your Luck</p>
            <p>Cost: 100 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

          <div className="reward-card">
            <h3>Mystery Box</h3>
            <p>Surprise Reward</p>
            <p>Cost: 700 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

          <div className="reward-card">
            <h3>Premium Mystery Box</h3>
            <p>Exclusive Reward</p>
            <p>Cost: 1500 Coins</p>
            <p className="reward-status">Available Now</p>
            <button
  className="redeem-btn"
  onClick={() => alert("Reward Redeemed Successfully!")}
>
  Redeem
</button>
          </div>

        </div>
      </div>

      <div className="reward-section">
        <h2>Achievements</h2>

        <div className="achievement-grid">

          <div className="achievement-card">
            <h3>Eco Starter</h3>
            <p>Completed first cleanup</p>
          </div>

          <div className="achievement-card">
            <h3>Cleanup Champion</h3>
            <p>Completed 10 cleanups</p>
          </div>

          <div className="achievement-card">
            <h3>Green Hero</h3>
            <p>Earned 1000 GreenCoins</p>
          </div>

        </div>
      </div>

      <div className="reward-section">
  <h2>Recent Activity</h2>

  <div className="reward-card">
    <p>+50 Coins earned from Cleanup #12</p>
    <p>+30 Coins earned from Plastic Collection</p>
    <p>Redeemed Swiggy Coupon</p>
    <p>Redeemed Amazon Gift Card</p>
  </div>
</div>

    </div>
  );
}

export default RewardCenter;