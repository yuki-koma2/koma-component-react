// とりあえず都度export。後で自動的に判別してbundlerに渡せるようにする。
export { Button } from "./atoms/Button/Button";

export const hoge = () => {
     const number = 1 + 1;
    console.log(number);
    return;
}
