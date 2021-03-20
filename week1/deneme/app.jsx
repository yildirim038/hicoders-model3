function HelloMessage(props) {
    return (
        <div>
            Hello {props.name}
        </div>
    );
}

ReactDOM.render(
    <HelloMessage name="Hi Coders!" />,
    document.getElementById('hello-example')
);
