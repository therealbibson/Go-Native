import React from 'react'

const RoadMap = () => {
  return (
    <section className="text-white py-20 px-6">

        <div className="text-center mb-24">
            <span className="px-5 py-2 text-sm rounded-full bg-[#0b1634] text-gray-300"> Our Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6">The <span className="text-orange-400">Road</span> Ahead</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-700"></div>
            <div className="relative mb-24">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full border-4 border-[#020B1F]"></div>
                <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-12 items-start">

                    <div className="md:text-right md:pr-12">
                        <h3 className="text-2xl text-gray-300 font-semibold">Native Alpha</h3>
                        <p className="text-gray-400">April, 25</p>
                    </div>
                    <div className="mt-6 md:mt-0 md:pl-12 text-gray-300">
                        <ul className="space-y-2">
                            <li>• nBTC smart contracts & UI for minting</li>
                            <li>• Bitcoin proving + verification system</li>
                            <li>• Proving Bitcoin testnet & mainnet on Sui</li>
                            <li>• Select DeFi partner integrations for nBTC</li>
                            <li>• Community activation & Marketing</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="relative mb-24">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full border-4 border-[#020B1F]"></div>
                <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                    <div className="md:text-right md:pr-12">
                        <h3 className="text-2xl text-gray-300 font-semibold">Native Beta</h3>
                        <p className="text-gray-400">Summer, 2025</p>
                    </div>

                    <div className="mt-6 md:mt-0 md:pl-12 text-gray-300">
                        <ul className="space-y-2">
                            <li>• IKA testnet integration</li>
                            <li>• Enable withdrawals</li>
                            <li>• Bridge transactions</li>
                            <li>• Co-marketing with partners</li>
                            <li>• Testnet Campaign & User activities</li>
                            <li>• BTCFi Beelievers NFT Launch</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative mb-24">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#020B1F]"></div>
                <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                    <div className="md:text-right md:pr-12">
                        <h3 className="text-2xl text-gray-300 font-semibold">Native Mainnet</h3>
                        <p className="text-gray-400">End of Q3, 2025</p>
                    </div>

                    <div className="mt-6 md:mt-0 md:pl-12 text-gray-300">
                        <ul className="space-y-2">
                            <li>• Bitcoin Yield Hub</li>
                            <li>• More Defi & Social Apps integrations</li>
                            <li>• Liquidity mining</li>
                            <li>• Co-marketing & PR</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full border-4 border-[#020B1F]"></div>
                <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                    <div className="md:text-right md:pr-12">
                        <h3 className="text-2xl text-gray-300 font-semibold">Expansion & TGE</h3>
                        <p className="text-gray-400">Q4 25 - Q1 26</p>
                    </div>

                    <div className="mt-6 md:mt-0 md:pl-12 text-gray-300">
                        <ul className="space-y-2">
                            <li>• Bitcoin "Single-click" integration</li>
                            <li>• TGE</li>
                            <li>• Governance module</li>
                            <li>• BTC Orchestration</li>
                            <li>• IBC Integration</li>
                            <li>• Dogecoin & Litecoin integration</li>
                            <li>• PR & Marketing campaigns</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default RoadMap
