import { AlignColumns } from './align-columns';

const exampleText = `Given$a$text$file$of$many$lines,$where$fields$within$a$line$
are$delineated$by$a$single$'dollar'$character,$write$a$program
that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$
column$are$separated$by$at$least$one$space.`;

const aligned = AlignColumns.align(exampleText, 1);

console.log(aligned);
