import "./Support.scss"
import { Image } from "minista"
import Field from "@/components/Field"
import Checkbox from "@/components/Checkbox"
import Button from "@/components/Button"
import Select from "@/components/Select"

const Support = () => {
  const titleId = "support - title"

  return (
    <section className="support container" aria-labelledby={titleId}>
      <div className="support__body">
        <div className="support__info">
          <h1 className="support__title h2" id={titleId}>
            Welcome to our support page!
          </h1>
          <div className="support__description">
            <p>
              We're here to help you with any problems you may be having with
              our product.
            </p>
          </div>
        </div>
        <Image
          className="support__image"
          src="/src/assets/images/support/1.png"
        />
      </div>
      <form className="support__form" action="">
        <Field
          className="support__form-cell"
          label="First Name"
          placeholder="Ivan"
          isRequired
        />
        <Field
          className="support__form-cell"
          label="Last Name"
          placeholder="Ivanov"
        />
        <Field
          className="support__form-cell"
          label="Email"
          type="email"
          placeholder="example@exampl.com"
          isRequired
        />
        <Field
          className="support__form-cell"
          label="Phone Number"
          placeholder="1 12345 67890"
          inputMode="tel"
          mask="00 00000 00000"
          renderBefore={(fieldControlClassName) => (
            <Select
              label="Phone number prefix"
              buttonClassName={fieldControlClassName}
              options={[
                { value: "+9", isSelected: true },
                { value: "+8" },
                { value: "+7" },
                { value: "+1" },
              ]}
            />
          )}
        />
        <Field
          className="support__form-cell support__form-cell--wide"
          label="Message"
          type="textarea"
          placeholder="Hi! I have a question..."
          isRequired
        />
        <div className="support__form-cell support__form-cell--wide support__form-cell--actions">
          <Checkbox
            className="support__form-agreement"
            label="I agree with Terms of Use and Privacy Policy"
            isRequired
          />
          <Button
            className="support__form-submit-button"
            label="Send Message"
            type="submit"
          />
        </div>
      </form>
    </section>
  )
}

export default Support
