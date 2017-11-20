export interface Dialog {
  visible: boolean;
  config?: {
    data: Object,
    onClose: Function
  };
}
