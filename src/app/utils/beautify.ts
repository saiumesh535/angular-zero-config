import * as beautify from 'js-beautify';
/**
 *
 * @param code this takes a html snippet as string
 */
export function beautifyCode(code: string): string {
    let result = '';
    try {
        if (code.length > 10) {
            code.split('<code>').forEach((data) => {
                const lol = '<code>' + data;
                result = result + lol.replace(new RegExp(/<code>[\s\S]*?<\/code>/, 'g'),
                    `<code>${beautify(lol.split('<code>')[1].split('</code>')[0])}</code>`
                );
            });
            return result;
        }
        return code;
    } catch (err) {
        console.error(err);
        return code;
    }
}

