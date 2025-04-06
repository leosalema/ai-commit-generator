import { generateCommitMessage } from './generateCommitMessage.js';
import { execSync } from 'child_process';

try {
    const diff = execSync('git diff --cached', { encoding: 'utf-8' });

    if (!diff.trim()) {
        console.log('⚠️ No staged change found. Use "git add" before.');
        process.exit(1);
    }

    console.log('⏳ Generating commit message with AI.');

    const message = await generateCommitMessage(diff);

    console.log('\n💬 Suggested message:\n');
    console.log(`➡️ ${message}\n`);

    const readline = await import('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Want to use that message? (y/N)', answer => {
        if (answer.toLowerCase() === 'y') {
            execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
            rl.close();
        }

        console.log('❌ Cancel commit');
    });
} catch (err) {
    console.error('Error generating commit:', err.message);
}