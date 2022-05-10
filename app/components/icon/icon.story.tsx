import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Icon } from "./icon"

declare let module

storiesOf("Icon", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Names", () => (
    <Story>
      <UseCase text="close" usage="The icon for going end everything">
        <Icon icon="io" name="close"/>
      </UseCase>
    </Story>
  ))
