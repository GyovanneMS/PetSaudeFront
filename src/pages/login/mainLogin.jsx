import Google from '../../assets/Google.svg'
import * as Form from '@radix-ui/react-form';

export function Main() {
    return (
        <div className="items-start p-5 center flex basis-1/4 ">
            <div className="flex flex-direction">
            <h1 className="alight-item:center text-3x1 font-bold underline">
                Bem-vindos de volta
            </h1>
            <p className="w-30 ">
                Por favor, insira suas informações abaixo
            </p>
            <a href="">
                <img src={Google} alt="Login with Google account" />
            </a>
            </div>
            <Form.Root className="FormRoot">
            <Form.Field className="FormField" name="email">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Form.Label className="FormLabel">Email</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                Please enter your email
                </Form.Message>
                <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid email
                </Form.Message>
            </div>
            <Form.Control asChild>
                <input className="Input" type="email" required />
            </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="question">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Form.Label className="FormLabel">Question</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                Please enter a question
                </Form.Message>
            </div>
            <Form.Control asChild>
                <textarea className="Textarea" required />
            </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
            <button className="Button" style={{ marginTop: 10 }}>
               Cadastrar
            </button>
            </Form.Submit>
        </Form.Root>
        </div>
        
    );
}
