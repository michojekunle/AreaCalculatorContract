const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AreaCalculatorModule", (m) => {
  // Deploy the AreaCalculator contract
  const areaCalculator = m.contract("AreaCalculator");

  // Additional configuration or deployment steps can go here, if necessary

  return {
    areaCalculator, // Return the deployed contract instance
  };
});
