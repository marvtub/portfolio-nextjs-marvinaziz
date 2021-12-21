import Link from "next/link";

function Button(props) {
  return (
    <Link key={props.text} href={props.href}>
      <div className="text-sm cursor-pointer my-6 lg:my-14 text-center  text-white border-solid border-[1px] border-white rounded-3xl px-12 py-4 w-max">
        {props.text}
      </div>
    </Link>
  );
}

export default Button;
