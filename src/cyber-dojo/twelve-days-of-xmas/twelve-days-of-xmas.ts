export class TwelveDaysOfXmas {
  private static generateIntro(day: string): string {
    return `On the ${day} day of Christmas\nMy true love gave to me:`;
  }

  private static days = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth',
  ];

  private static lines = [
    'A partridge in a pear tree.',
    'Two turtle doves and',
    'Three french hens',
    'Four calling birds',
    'Five golden rings',
    'Six geese a-laying',
    'Seven swans a-swimming',
    'Eight maids a-milking',
    'Nine ladies dancing',
    'Ten lords a-leaping',
    'Eleven pipers piping',
    'Twelve drummers drumming',
  ];

  private static generateVerse(index: number): string {
    const intro = `${this.generateIntro(this.days[index])}\n`;
    const lines: string[] = [];

    for (let i = index; i >= 0; i -= 1) {
      lines.push(this.lines[i]);
    }

    return intro + lines.join('\n');
  }

  static generateLyrics(): string {
    const verses: string[] = [];

    for (let i = 0; i <= 11; i += 1) {
      verses.push(this.generateVerse(i));
    }

    return verses.join('\n\n');
  }
}
