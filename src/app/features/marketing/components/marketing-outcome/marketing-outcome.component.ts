import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OutcomeItem {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-marketing-outcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing-outcome.component.html',
  styleUrl: './marketing-outcome.component.scss'
})
export class MarketingOutcomeComponent {
  imageUrl: string = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhc1uuO8gfXXArGzlPhZ_xAex6nTsceVtytAr2M0s_F5amb_bUQM7EmMp6hMz_xz9zxAtpuPYGjC900GO--KHTgWx_Wr5xv6ImKKpVGgA1M1gKp-dfBneUPblqQ3BHI-CliycyCql7ywCcTvRPuvqtfVkQ_aRlr9htiG5UQpq_8XLAo4kaMiEQHQ5DESXfKIJUTDVLblSkZZwvxuxgYA3XlrxUBNr-q2o31l9f-dPGkJ3wU6N1FpMrQ1kMQMpUknuqAqnPImO1Q6yu';
  
  outcomes: OutcomeItem[] = [
    {
      icon: 'bolt',
      title: 'Instant Personas'
    },
    {
      icon: 'trending_up',
      title: 'Live Strategy Updates'
    },
    {
      icon: 'record_voice_over',
      title: 'Unified Brand Voice'
    }
  ];
}

