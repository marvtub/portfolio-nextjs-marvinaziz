import Link from "next/link";

function Button(props) {
  return (
    <Link key={props.text} href={props.href}>
      <div className="text-sm cursor-pointer my-14 text-center  text-white border-solid border-2 border-white rounded-2xl px-8 py-4 w-max">
        {props.text}
      </div>
    </Link>
  );
}

export default Button;
