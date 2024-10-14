import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons
import Card from '../BlogCard/BlogCard';
import './Blogs.css';
import img1 from '../../assets/images/123img.png';
import img2 from '../../assets/images/124img.jpg';
import img3 from '../../assets/images/125img.jpg';
import img4 from '../../assets/images/126img.jpeg';
import img5 from '../../assets/images/126img.jpg';
import { i } from 'framer-motion/client';
const Blogs = () => {
  const cardsData =[
    {
      "imageUrl": `${img1}`,
      "title": "How Warranty Documents Protect High Net Worth Assets in Divorce",
      "date": "10 October 2024",
      "content": "Divorce can be particularly challenging for High Net Worth (HNW) individuals due to the complexities involved in dividing large and diverse assets. Warranty documents play a crucial role in protecting key financial interests during this process. These agreements, which ensure a third party will repay debts, provide a level of security that is vital for safeguarding valuable investments like real estate, businesses, and luxury goods.\n\nBy utilizing warranty documents, HNW individuals can ensure that their assets remain protected from sudden financial liabilities or manipulations during divorce proceedings. Warranties can shield against hidden debt or fraudulent claims, ensuring that all liabilities are accurately disclosed and managed. Additionally, they serve as a buffer against asset undervaluation, protecting the true worth of properties, businesses, or high-value possessions. As financial transparency is critical in these cases, robust warranties can help prevent any unexpected losses during the asset division process, ultimately preserving wealth throughout the divorce. For individuals facing high-stakes separations, warranties become an essential tool for financial security and ensuring an equitable settlement."
    },
    {
      "imageUrl":"https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Quick Credit Solutions During Divorce: Securing Immediate Liquidity",
      "date": "20 October 2024",
      "content": "Divorce can bring sudden and unexpected financial demands, especially for High Net Worth individuals who may need to quickly liquidate assets, cover legal fees, or address other immediate financial obligations. Quick credit services provide a solution by offering immediate access to funds without the delays that come with traditional loan processes. This rapid liquidity can be a lifeline during critical moments in divorce proceedings.\n\nQuick credit services can help bridge financial gaps, especially when individuals face urgent expenses, such as legal costs, lifestyle adjustments, or asset-related taxes. This article explores the benefits of using quick credit to maintain financial stability while navigating divorce. However, it’s essential to negotiate favorable terms, keeping an eye on interest rates and repayment schedules. By doing so, HNW individuals can use quick credit without compromising their long-term financial health. Securing immediate liquidity can provide much-needed flexibility, allowing for smoother negotiations and ensuring that financial obligations are met without jeopardizing wealth preservation."
    },
    {
      "imageUrl":  `${img2}`,
      "title": "Creating Deposits to Preserve Wealth During a Divorce",
      "date": "30 October 2024",
      "content": "For High Net Worth individuals going through a divorce, preserving and protecting wealth is a top priority. One effective strategy is creating structured deposits that not only safeguard financial assets but also generate interest over time. This approach allows liquid capital to be stored securely, providing financial stability throughout the divorce process.\n\nStructured deposits offer flexibility during asset division negotiations, as the funds can be accessed when needed, while still benefiting from interest accumulation. This ensures that even in the midst of asset restructuring, individuals maintain financial growth. Moreover, structured deposits serve as a safe harbor for liquid assets, minimizing exposure to market volatility or economic risks. By securing deposits in interest-bearing accounts, HNW individuals can create a financial buffer that supports their long-term goals, offering protection and growth until the divorce settlement is finalized. This strategy ensures that wealth is preserved and can be easily managed during a time of uncertainty."
    },
    {
      "imageUrl": `${img5}`,
      "title": "Warranty Documents in High Net Worth Divorces: Safeguarding Hidden Assets",
      "date": "10 November 2024",
      "content": "High Net Worth divorces can often be complex, especially when it comes to uncovering and protecting hidden or undervalued assets. Warranty documents play a pivotal role in safeguarding these assets, serving as a financial safety net during divorce proceedings. By ensuring that debts and liabilities are accounted for, warranties help prevent financial manipulation or deceit.\n\nIn contentious divorces, where asset disclosure might be incomplete or intentionally misleading, warranties offer a layer of protection. They can confirm asset ownership and ensure that hidden liabilities, such as unpaid debts, are disclosed and managed. For HNW individuals, having thorough warranty coverage is essential to securing a fair and transparent settlement. These documents can also prevent the risk of hidden debts affecting asset valuation, helping ensure that all financial holdings are appropriately divided. In high-stakes cases, warranties are an indispensable tool for safeguarding wealth, minimizing financial risk, and achieving equitable asset division."
    },
    {
      "imageUrl": `${img4}`,
      "title": "The Role of Quick Credit in Funding Divorce Litigation for HNW Individuals",
      "date": "20 November 2024",
      "content": "Divorce litigation can be a long and expensive process, particularly for High Net Worth individuals who may face significant legal fees, expert consultations, and other high costs associated with complex divorce cases. Quick credit services provide a practical solution for those needing immediate funds to cover these expenses, ensuring that financial demands do not disrupt the divorce process.\n\nQuick credit services allow HNW individuals to meet urgent financial needs without having to prematurely liquidate assets or drain their savings. This article explores how to strategically use quick credit during divorce litigation, ensuring that the borrowed funds are managed efficiently and that repayment plans do not burden long-term financial health. Negotiating favorable terms, such as low interest rates and flexible repayment schedules, can help minimize the financial impact of taking on credit during a divorce. By maintaining financial liquidity through quick credit, individuals can protect their wealth and ensure that the divorce process proceeds smoothly, even when facing high financial demands."
    },
    {
      "imageUrl": `${img3}`,
      "title": "Ensuring Secure Transactions During High Net Worth Divorce Investigations",
      "date": "10 December 2024",
      "content": "For High Net Worth (HNW) individuals, securing financial transactions during divorce investigations is critical due to the complexity and high stakes involved. This article explores how the organization implements robust security measures to ensure that financial transactions are protected from fraud, data breaches, and unauthorized access, safeguarding large assets and sensitive financial data throughout the divorce process.\n\nFinancial transactions in divorce cases often include significant asset transfers, property settlements, and business dealings, making security essential. The organization uses advanced encryption technologies, blockchain transparency, two-factor authentication, and private financial ledgers to guarantee the security of all transactions. These measures not only prevent unauthorized access but also create a verifiable and immutable record of financial movements. This is especially important in uncovering hidden assets or managing complex financial portfolios during divorce investigations.\n\nFor HNW individuals, ensuring that financial transactions are secure throughout the divorce process is vital in protecting wealth and personal data from risks like fraud or cyberattacks. By prioritizing transaction security, individuals can navigate divorce proceedings with confidence, knowing that their financial assets and sensitive information are well-protected."
    }
  ]
  
;

    // Function to scroll left
    const handleScrollLeft = () => {
        const scroller = document.querySelector('.horizontal-scroller');
        scroller.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the scroll distance as needed
    };

    // Function to scroll right
    const handleScrollRight = () => {
        const scroller = document.querySelector('.horizontal-scroller');
        scroller.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll distance as needed
    };

    return (
        <div className="blogs-container">
            <h2 className='text-[30px] mt-10 font-bold'>Blogs</h2>
            <div className="scroll-buttons">
                <button className="scroll-button" onClick={handleScrollLeft}>
                    <FaChevronLeft />
                </button>
                <button className="scroll-button" onClick={handleScrollRight}>
                    <FaChevronRight />
                </button>
            </div>
            <div className="horizontal-scroller">
                {cardsData.map((card, index) => (
                    <div className="card2" key={index}>
                        <Card
                            imageUrl={card.imageUrl}
                            title={card.title}
                            date={card.date}
                            excerpt={card.content}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
