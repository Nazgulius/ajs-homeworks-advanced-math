import ErrorRepository from '../ErrorRepository.js';


test(`Проверка читаемого текста ошибки`, ()=>{
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate(1)).toBe(`Error1`);
})

test(`проверка ошибки`, ()=>{
    const errorRepository = new ErrorRepository();
    expect(()=>errorRepository.translate(3)).toThrow()
})