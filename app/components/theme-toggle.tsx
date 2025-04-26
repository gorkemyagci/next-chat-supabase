'use client';

import { useTheme } from '@/components/providers';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className='p-3'>
            <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="rounded-md p-2 hover:bg-accent"
            >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
        </div>
    );
} 