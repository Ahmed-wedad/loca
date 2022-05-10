import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { IconeNames, IconTypes } from "../icon/icons"
import { TxKeyPath } from "../../i18n"
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export interface HeaderProps {
  /**
   * Main header, e.g. POWERED BY IGNITE
   */
  headerTx?: TxKeyPath

  /**
   * header non-i18n
   */
  headerText?: string
  /**
   * progress steps
   */

  progress?:ProgressSteps
  /**
   * Icon that should appear on the left
   */
  leftIcon?:{type:IconTypes,name :IconeNames}

  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void

  /**
   * Icon that should appear on the right
   */
   rightIcon?:{type:IconTypes,name :IconeNames}

  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>

  /**
   * progress bar
   */
  
}
