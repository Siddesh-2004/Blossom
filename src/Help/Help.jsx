import "./Help.css";
import Heading from "../Heading";
function Help() {
  return (
    <>
      <div className="guideLinesContainer">
        <div className="guideLines">
          <Heading heading1="Flower Guidelines" />
          Proper care ensures flowers stay fresh longer. Follow these tips to
          maintain their beauty:
          <h3>General Flower Care Tips</h3>
          <ul>
            <li>
              Trim the Stems: Cut about 1-2 inches off the stems at a 45-degree
              angle before placing them in water. This increases water
              absorption.
            </li>
            <li>
              Use Clean Water: Change the water every 2 days to prevent bacteria
              buildup.
            </li>
            <li>
              Remove Extra Leaves: Remove any leaves below the waterline to
              prevent rotting.
            </li>
            <li>
              Use Flower Food: Add the provided flower food to the water or use
              a homemade mix (sugar + lemon juice + a drop of bleach).
            </li>
            <li>
              Keep Away from Direct Sunlight & Heat: Flowers last longer in a
              cool, shaded place.
            </li>
            <li>
              Avoid Placing Near Ripening Fruits: Fruits release ethylene gas,
              which can cause flowers to wilt faster.
            </li>
          </ul>
          <h3>Care Tips for Specific Flowers</h3>
          <ul>
            <li>
              Roses: Recut stems every 2 days and remove wilted petals for
              freshness.
            </li>
            <li>
              Lilies: Keep away from pets as they can be toxic. Remove pollen
              from the center to prevent stains.
            </li>
            <li>Orchids: Require indirect sunlight and occasional misting.</li>
          </ul>
        </div>
        <div className="guideLines usageTips">
          <Heading heading1="Usage Tips"></Heading>
          <h3>Flowers for Different Occasions</h3>
          <ul>
            <li>
              Weddings: Roses, peonies, and lilies are popular for bridal
              bouquets.
            </li>
            <li>
              Birthdays: Bright flowers like sunflowers, daisies, and carnations
              spread joy.
            </li>
            <li>
              Sympathy & Funerals: Lilies, white roses, and chrysanthemums
              symbolize remembrance.
            </li>
            <li>
              Anniversaries: Red roses for romance, orchids for elegance, and
              tulips for deep love.
            </li>
            <li>
              Valentine's Day: Classic red roses symbolize love, while pink
              roses express admiration.
            </li>
            <li>
              Graduations: Yellow roses and gerbera daisies signify success and
              new beginnings.
            </li>
            <li>
              Mother’s Day: Carnations, lilies, and orchids express gratitude
              and appreciation.
            </li>
            <li>
              Get Well Soon: Bright flowers like daisies and hydrangeas bring
              cheer and positivity.
            </li>
          </ul>
        </div>
        <div className="guideLines allergy">
          {/* <h1>3. Allergy & Safety Information</h1>
          <h3>Common Flower Allergies</h3> */}
          <Heading heading1="Allergy & Safety"></Heading>

          <p>
            Pollen-heavy flowers like lilies, daisies, and sunflowers can
            trigger allergies.
          </p>

          <p>
            Best hypoallergenic flowers: Roses, tulips, orchids, and hydrangeas
            have minimal pollen.
          </p>

          <h3>Pet-Friendly Flowers</h3>
          <p>Safe for pets: Roses, sunflowers, snapdragons.</p>
          <p>
            Toxic to cats & dogs: Lilies, tulips, daffodils, hydrangeas, and
            chrysanthemums.
          </p>
          <p>
            Tip: If you have pets, keep toxic flowers out of reach or opt for
            pet-safe options.
          </p>
        </div>
        <div className="guideLines sustainability">
          {/* <h1>4. Sustainability & Eco-Friendly Tips</h1>
          <h3>How to Reuse Flowers</h3> */}
          <Heading heading1="Sustainability Tips" />
          <ul>
            <li>
              Dry them for keepsakes: Hang flowers upside down in a dry, dark
              place.
            </li>
            <li>
              Make potpourri: Dry petals and mix with essential oils for a
              natural fragrance.
            </li>
            <li>
              Use for DIY crafts: Press flowers for decoration, greeting cards,
              or resin art.
            </li>
          </ul>
          <h3>Best Ways to Dispose of Flowers Responsibly</h3>
          <p>Compost old flowers to enrich your garden soil.</p>
          <p>
            Donate leftover flowers to hospitals or nursing homes to brighten
            someone's day.
          </p>
        </div>
      </div>
      <div className="faqContainer">
        <Heading heading1="FAQ" />
        <ul>
          <li className="questionFaq">
            <b>How long will my flowers last?</b>
            <div className="answerFaq">
         Ans:   Fresh-cut flowers typically last 5-10 days, depending on the type
            and care.
          </div>
          </li>

          
          <li className="questionFaq ">
            <b>Can I customize my bouquet?</b>
            <div className="answerFaq">
           Ans: Yes! You can select your preferred flowers and colors when placing
            an order.
          </div>
          </li>
         
          <li className="questionFaq">
            <b>What should I do if my flowers arrive damaged?</b>
            <div className="answerFaq">
            Ans: Contact our customer service team within 24 hours for a
            replacement or refund.
          </div>
          </li>
         
          <li className="questionFaq">
            <b>Do you offer same-day delivery?</b>
            <div className="answerFaq">
          Ans:  Yes, same-day delivery is available for orders placed before 2 PM.
          </div>
          </li>
         
          <li className="questionFaq">
            <b>Are there any special storage tips for flower delivery?</b>
            <div className="answerFaq">
            Ans:If you're not home when the flowers arrive, keep them in a cool,
            shaded area with fresh water until you can arrange them properly.
          </div>
          </li>
        
        </ul>
      </div>
    </>
  );
}

export default Help;
